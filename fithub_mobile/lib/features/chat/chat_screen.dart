import 'package:flutter/material.dart';

class ChatScreen extends StatefulWidget {
  final String roomId;
  const ChatScreen({super.key, required this.roomId});

  @override
  State<ChatScreen> createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  final _inputCtrl = TextEditingController();
  final List<_Message> _messages = [];

  @override
  void initState() {
    super.initState();
    _messages.add(
      _Message(
        sender: Sender.system,
        text: widget.roomId == 'feedback'
            ? 'We''d love to hear your feedback. Your comments are encrypted in transit and stored securely.'
            : widget.roomId == 'fitlah-ai'
                ? 'Hi! I''m FitLah AI. This preview uses a local mock reply only.'
                : 'Welcome to the community space! Be kind and supportive.',
      ),
    );
  }

  Future<void> _send() async {
    final text = _inputCtrl.text.trim();
    if (text.isEmpty) return;
    setState(() {
      _messages.add(_Message(sender: Sender.user, text: text));
      _inputCtrl.clear();
    });

    // NOTE: In a full implementation, you would:
    // - For "feedback": append to users.feedback via Supabase over HTTPS and reply with thank-you.
    // - For "fitlah-ai": call a secure AI API that never executes user input.
    setState(() {
      _messages.add(
        _Message(
          sender: Sender.system,
          text: widget.roomId == 'feedback'
              ? 'Thank you for your feedback! The team will continuously refine and improve the app!'
              : 'Message received. In production this will be handled by a secure backend.',
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          widget.roomId == 'feedback'
              ? 'Feedback to Team'
              : widget.roomId == 'fitlah-ai'
                  ? 'FitLah AI Assistant'
                  : 'Global Community',
        ),
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.all(12),
              itemCount: _messages.length,
              itemBuilder: (context, index) {
                final m = _messages[index];
                final isUser = m.sender == Sender.user;
                return Align(
                  alignment: isUser
                      ? Alignment.centerRight
                      : Alignment.centerLeft,
                  child: Container(
                    margin: const EdgeInsets.symmetric(vertical: 4),
                    padding: const EdgeInsets.symmetric(
                      horizontal: 12,
                      vertical: 8,
                    ),
                    decoration: BoxDecoration(
                      color: isUser
                          ? Theme.of(context).colorScheme.primary
                          : Theme.of(context).colorScheme.surfaceVariant,
                      borderRadius: BorderRadius.circular(16),
                    ),
                    child: Text(
                      m.text,
                      style: TextStyle(
                        color: isUser
                            ? Colors.black
                            : Theme.of(context)
                                .colorScheme
                                .onSurfaceVariant,
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
          SafeArea(
            top: false,
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
              child: Row(
                children: [
                  Expanded(
                    child: TextField(
                      controller: _inputCtrl,
                      decoration: const InputDecoration(
                        hintText: 'Type your message...',
                        border: OutlineInputBorder(),
                        isDense: true,
                      ),
                    ),
                  ),
                  const SizedBox(width: 8),
                  IconButton(
                    icon: const Icon(Icons.send),
                    onPressed: _send,
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

enum Sender { user, system }

class _Message {
  final Sender sender;
  final String text;

  _Message({required this.sender, required this.text});
}

